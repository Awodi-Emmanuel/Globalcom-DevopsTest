# Globalcom-DevOpsTest
This project is created  with a helm chart and deployed to a kubernetes cluster it is configured with  ingress to be accessible  externally from a kubernetes cluster

# General overview of the steps tooked to accomplish this Task:
1. Dockrised a Frontend & Backend project
2. Setup a new environment for Helm
3. Pulled the two containers on my-helm-chart-project
4. Make some neccessary modifications to my-helm-chart-project template
5. Deployed the two containers via helm package
6. Check for a running pods with `kubectl`
7. Confirmed if ingress is configured properly and created via `kubectl get ingress`

# Pre-requisite:
1. Docker Desktop
2. wls(on window os)
3. Vscode 
4. Helm 
5. Kubernetes (Kubernetes already came by default with the docker desktop all you need to do is install it and you're up and running)
6. set up Kubectl on linux terminal

# Follow this Step to run this project 
There are some steps I am not going to cover in this documentation such as setting up the project from scratch for the frontend & backend of this project, I am also not going to cover how this project is dockerised,  but as stated above I basically deployed a microservices that comprices of two docker containers a [backend and a frontend docker containers]


Now,it is time to navigate to any directory on my ubuntu terminal with a `cd` command to create my-helm-chart-project
I ensured I setup my wsl and kubernetes from my Docker Destop on windows to be able to access them through my ubuntu terminal.

- Step 1
I already setup a new repo on gitub so I can clone the repo by running:
```
git clone [git-repo]
```

- Step 2
Navigate to my project dictory also known as the git repo
```
cd my-project-name
```

- Step 3
Open project with vscode I am sure am inside my project directory already, now type
```
code .
```
- Step 4
To create my-helm-chart-project inside the project directory, I would open  vscode terminal with `CTR-L ~` or on my project directory on linux 
I named it a name I like, remember a square brackect is not inclusive in the naming convention. 

```
helm create [my-helm-chart-project-name]
```


> Note: Helm generated a template for me to customize it to suite my project reqiurements which in my requirements my two containers were pulled from dockerhub and I configured my ingress manifest to expose the `host` 

>I am running my project from my `localhost` The frontend IP would be exposed to `port localhost:4000` while the backend IP would be exposed to `http://localhost:3000`. after modifying my manifest files alround to suites my needs I would dry run to test to see if everything is working fine before installing the helm chart package to my kubernetes cluster:


- Step 5 
Dry run helm-chart to see if there is an issue in the code by typing the below command I ensure I navigate to [my-helm-chart-project] directory from my vscode terminal

```
helm install --dry-run --debug [deployement] .
```
> Note: the deployment in the square bracket can be anyname and the dot specify my current directory which in this case I am already in my-helm-chart-project directory.

- Step 6
From the previous command if everything went well and no errors occours  from any of my manifest files then I would go ahead and install  `[my-helm-chart-project]` to my kubernetes cluster by running the command below command
```
helm install deployment .
```

- Step 7 
If `step 6` runs sucessfully then we can proceed  to see our running pods by typing

```
kubectl get pods
```

We can also update our manifest files or project by runnig the below helm command
```
helm upgrade deployment .
```

We can also list our deployment version for every upgrade we have made to our project by typing:
```
helm install history deployment
```

We can also rollback our deployments
```
helm rollback deployment [version]
```

To check our active ingress we run:
```
kubectl get ingress
```

More update comming up soon!



