Full requirements:
```
Use a NodePort Service to enable access to the project.
```

# Re-apply app from part-01/04 folder

```
$ kubectl apply -f ../04/manifests/deployment.yaml 
deployment.apps/webapp-dep created
```

# Apply NodePort Service

```
$ kubectl apply -f manifests/service.yaml 
service/hashresponse-svc created
```

# Test connection

```
$ curl -v http://localhost:8082
*   Trying 127.0.0.1:8082...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 8082 (#0)
> GET / HTTP/1.1
> Host: localhost:8082
> User-Agent: curl/7.68.0
> Accept: */*
> 
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: text/html; charset=utf-8
< Content-Length: 38
< ETag: W/"26-5NOT/b79S/H5huEMcY1pDs/YPPw"
< Date: Sat, 25 Jun 2022 17:24:50 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< 
* Connection #0 to host localhost left intact
Not sure what to configure and return!
```

The network connection is now working using cluster port and node ports