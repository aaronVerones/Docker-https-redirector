# https-redirector
Simple Node server that redirects any HTTP request to HTTPS. Typically, you would want to implement HTTP-to-HTTPS redirection at the infrastructure level such as in your routing or load balancing. However, for workflows where this is not applicable (or for simple testing/mocking purposes), this might be helpful.

### Quickstart
command: 
```
docker run -p [host-port-to-redirect]:80 aaronverones/http-redirector
```
examples:

```
docker run -p 3000:80 aaronverones/http-redirector
```
```
docker run -p 80:80 aaronverones/http-redirector
```


