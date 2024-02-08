import json
from channels.generic.websocket import AsyncWebsocketConsumer


class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope['url_route']["kwargs"]['room_name']
        self.room_group_name = "chat_%s" % self.room_name

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        

        await self.channel_layer.group_send(
            self.room_group_name,
            {
                "type" : "tester_message",
                "tester" : "test"
            }
        )

        toSend = {
            "username" : self.scope["user"].username,
            "channel" : self.channel_name,
            "action" : "channel_receiving"
        }

        await self.channel_layer.send(
            self.channel_name,
            {
                "type" : "channel_receiving",
                "data" : toSend
            }
        )

        await self.accept()

    async def channel_receiving(self, event):
        await self.send(text_data=json.dumps(
            event["data"]
        ))

    async def tester_message(self, event):
        tester = event["tester"]

        await self.send(text_data=json.dumps({
            "tester" : tester,
            "type" : "tester_message"
        }))

    async def disconnect(self, code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        text_data = json.loads(text_data)
        message = text_data["message"]

        action = text_data["action"]
        print("\n\n\n\n\n\n\n" + str(message))

        if (action == "new-offer") or (action == "new-answer"):
            receiver_channel_name = message["receiver_channel_name"]

            message["receiver_channel_name"] = self.channel_name

            print(message)

            await self.channel_layer.send(
                receiver_channel_name,
                {
                    "type": "send.sdp",
                    "receive_dict":text_data
                }
            )

            return
        elif (action == "chat"):
            await self.channel_layer.group_send(
                self.room_group_name,
                {
                    "type": "chat_message",
                    "data":text_data
                }
            )
        elif (action == "new-peer"):
            print("NEW PEER")
            await self.channel_layer.group_send(
                self.room_group_name,
                {
                    "type": "peer",
                    "data": text_data
                }
            )

    async def send_sdp(self, event):
        text_data = event["receive_dict"]
            
        await self.send(text_data=json.dumps(text_data))

    async def peer(self, event):
        text_data = event["data"]
            
        await self.send(text_data=json.dumps(text_data))

    async def chat_message(self, event):
        message = event["data"]["message"]
        username = event["data"]["username"]

        print(username)

        await self.send(text_data=json.dumps({
            "username": username,
            "message" : message,
            "type":"chat_message"
        }))