from django.shortcuts import render,redirect
from compose.forms import MailForm



# Create your views here.
# def index(request):
#     return render(request,'load.html')

def index(request):
    if request.method == "POST":
        form = MailForm(request.POST)
        if form.is_valid():
            mail_item=form.save(commit=False)
            mail_item.save()
            return redirect('/')
    else:
        form=MailForm()
    return render(request,'load.html',{'form':form})



