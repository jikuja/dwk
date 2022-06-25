Full requirements:

```
In your "Log output" application create the folder for manifests and move your deployment into a declarative file.

Make sure everything still works by restarting and following logs.
```

# Declarative approach

## New changes
* Write manifests/deployment.yml
  * re-using container image jikuja/dwk:app01 on dockerhub

## Apply the deployment with kubectl
```
$ kubectl apply -f manifests/deployment.yaml
deployment.apps/hashgenerator-dep created
```

## Check the results
```
$ kubectl logs -f hashgenerator-dep-77f5c49789-zxfpb 

> app01@1.0.0 start
> node index.js

2022-06-25T16:07:57.800Z: d97aa9f8-2502-434c-b649-916d60519f3a
2022-06-25T16:08:02.807Z: d97aa9f8-2502-434c-b649-916d60519f3a
2022-06-25T16:08:07.810Z: d97aa9f8-2502-434c-b649-916d60519f3a
```

