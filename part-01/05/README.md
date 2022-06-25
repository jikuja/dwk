Full requirements:
```
Have the project respond something to a GET request sent to the project. A simple html page is good or you can deploy something more complex like a single-page-application.

Use kubectl port-forward to confirm that the project is accessible and works in the cluster by using a browser to access the project.
```

# Check that our project is still running
```
kubectl get pods
NAME                                READY   STATUS    RESTARTS   AGE
hashgenerator-dep-88df87b96-6frjm   1/1     Running   0          33m
webapp-dep-97bd4748b-dmbhx          1/1     Running   0          27m
hashresponse-dep-869df48685-vq5hs   1/1     Running   0          4m37s
```

# Add runtimne port-forwarding with kubectl for webapp-dep-97bd4748b-dmbhx
```
kubectl port-forward webapp-dep-97bd4748b-dmbhx 7777:3000
Forwarding from 127.0.0.1:7777 -> 3000
Forwarding from [::1]:7777 -> 3000
```

# Check port forward on other terminal
```
curl -v http://localhost:7777
*   Trying 127.0.0.1:7777...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 7777 (#0)
> GET / HTTP/1.1
> Host: localhost:7777
> User-Agent: curl/7.68.0
> Accept: */*
> 
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: text/html; charset=utf-8
< Content-Length: 38
< ETag: W/"26-5NOT/b79S/H5huEMcY1pDs/YPPw"
< Date: Sat, 25 Jun 2022 16:46:07 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< 
* Connection #0 to host localhost left intact
Not sure what to configure and return!
```

Port forwarding is working inside WSL 2. Not sure if forward is also available outside of WSL 2. Did not check it.