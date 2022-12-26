# Globalcom-DevopsTest
This project is created  with helm chart and deployed to a kubernetes cluster it is configured with  ingress to be accessed externally from a kubernetes cluster

# General overview of the steps tooked to accomplish this Task
1. Dockrised a Frontend & Backend 
2. Setup  a new environment for Helm
3. Get the two Image on Helm
4. Make neccessary modification 
5. Deploy via helm 
6. Check for a running pods with `kubectl`
7. confirm your externalIP of which is configure with  ingress

# Pre-requisite:
1. Docker Desktop
2. wls(I on window os)
3. Vscode 
4. Helm 
5. Kubernetes (Kubernetes already came by default with the docker desktop all you need to do is set configure it and you're up and running)
6. Kubectl (Are automatically setup by default)

# Follow this Step to run this project 
There are some steps I am not going to cover in this documentation such as project set up for frontend & backend of this project, I am not also going to cover how project is dockerised but as stated above I basically deploying a microservices that comprices of backend and frontend docker container


Navigate to any directory on your ubuntu terminal with a `cd` command to create your helm chart
I ensure I setup wsl and kubernetes from my Docker Destop on windows to be able to access them through wsl

- Step 1
I already setup a new repo on gitub so I clone the repo by running:
```
git clone [git-repo]
```

- Step 2
Navigate to the project dictory also known as the git repo
```
cd my-project-name
```

- Step 3
Open project with vscode I am sure am inside my project directory already now type
```
code .
```
- Step 4
To create our helm chart inside the project directory open vscode terminal with `CTR-L ~` or on your project directory on linux type:
I named it a name I like, remember a square brackect is not inclusive in the naming convention. 

```
helm create [my-helm-chart]
```


> Note: Helm generated a template for me to customize it to suite my project reqiurements which in my requirements my two containers pulled from dockerhub and I am using ingress to expose the `externalIP` I am running my project from my `localhost` The frontend IP would be exposed to `port 4000` while the backend IP would be exposed to `http://localhost:5000`. after modifying my manifest files alround to suite my needs I would dry run test to see if everything is working fine before installing the helm chart to my kubernetes cluster:

- Step 5 
Dry run helm-chart to see if there is an issue in the code by typing the below command I ensure I navigate to [my-helm-chart] directory from my vscode terminal

```
helm install --dry-run --debug [deployement] .
```
- Step 6
From the previous command if everything went well and no errors from from any of my manifest file then I would go ahead and install  `[my-helm-chart]` to my kubernetes cluster by running the command below command
```
helm install deployment .
```

- Step 7 
If `step 6` runs sucessfully then we can proceed  to see our running pods
```
kubectl get pods
```





