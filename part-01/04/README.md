Full requirements:

```
In your "Log output" application create the folder for manifests and move your deployment into a declarative file.

Make sure everything still works by restarting and following logs.
```

# Declarative approach

## New changes
* Write manifests/deployment.yml
  * re-using container image jikuja/dwk:app02 on dockerhub

## Apply the deployment with kubectl
```
$ kubectl apply -f manifests/deployment.yaml
deployment.apps/hashgenerator-dep created
```

## Check the results
```
$ kubectl logs -f webapp-dep-97bd4748b-dmbhx 

> app02@1.0.0 start
> node index.js

Server started in port 3000
^C
```