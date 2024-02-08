from django.shortcuts import render
from .models import *
import random
from .forms import FormAppForm
from .decorators import unauth_user
from userportal.models import Application

# Create your views here.
def careers(request):
    jobs = Job.objects.all()

    my_pix = ["mesh1.png", "mesh2.png", "mesh3.png", "mesh4.png"]
        
    chosen_image = random.choice(my_pix)

    image_url = f"/static/{chosen_image}" 

    print(image_url)

    context = {'image_url': image_url,
                "jobs": jobs,
               "count": jobs.count()}
    
    return render(request, "NEWCareers.html", context) 

@unauth_user
def forms(request, id):
    if request.method == "GET":
        my_pix = ["mesh1.png", "mesh2.png", "mesh3.png", "mesh4.png"]
        
        chosen_image = random.choice(my_pix)

        image_url = f"/static/{chosen_image}" 

        context = {'image_url': image_url,
                   "job" : Job.objects.get(id=int(id))
                   }
        print(context)
        return render(request, 'Forms.html', context)
    else:
        form = FormAppForm(request.POST, request.FILES)
        if 'contactSuper' in request.POST:
            pass
        else:
            form.initial["contactSuper"] = True

        if form.is_valid():
            print("valid")
            job_instance = Job.objects.get(id=int(id))

            application = Application(
                companyName = job_instance.jobCompany,
                position = job_instance.jobTitle,
                user = request.user,
                status = "Waiting"
            )

            application.save()

            new_instance = FormApp(
                forJob = job_instance,
                fName = form.cleaned_data.get('fName'),
                lName = form.cleaned_data.get('lName'),
                pName = form.cleaned_data.get('pName'),
                email = form.cleaned_data.get('email'),
                phone = form.cleaned_data.get('phone'),
                address = form.cleaned_data.get('address'),
                dateOfBirth = form.cleaned_data.get('dateOfBirth'),
                lastCompany = form.cleaned_data.get('lastCompany'),
                lastJobTitle = form.cleaned_data.get('lastJobTitle'),
                lastDateEmployed = form.cleaned_data.get('lastDateEmployed'),
                contactSuper = form.cleaned_data.get('contactSuper'),
                superName = form.cleaned_data.get('superName'),
                superTitle = form.cleaned_data.get('superTitle'),
                superContact = form.cleaned_data.get('superContact'),
                education = form.cleaned_data.get('education'),
                school = form.cleaned_data.get('school'),
                major = form.cleaned_data.get('major'),
                dateOfGrad = form.cleaned_data.get('dateOfGrad'),
                languages = form.cleaned_data.get('languages'),
                citizenship = form.cleaned_data.get('citizenship'),
                file = form.cleaned_data.get('file'),
                user = request.user,
                associated_application = application
            )            
            new_instance.save()

        my_pix = ["mesh1.png", "mesh2.png", "mesh3.png", "mesh4.png"]
        
        chosen_image = random.choice(my_pix)

        image_url = f"/static/{chosen_image}" 

        return render(request, 'Forms.html', context={"image_url" : image_url,
                                                      "job" : Job.objects.get(id=int(id))})



    