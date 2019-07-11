# Heroku Redirect

This is a simple Node.JS app that does nothing more (and nothing less)
than redirect all incoming requests to another hostname while retaining
the original request path.

```
https://first-domain.com/blah → https://second-domain.com/blah
```

## Installation

1. Clone the repo
   ```shell
   $ git clone https://github.com/philippbosch/heroku-redirect.git
   ```
2. Create the Heroku app
   ```shell
   $ heroku apps:create <app name>
   ```
3. Push the code to Heroku
   ```shell
   $ git push heroku master
   ```
4. Configure the app
   ```shell
   $ heroku config:set TARGET_HOSTNAME <hostname>
   ```

## Configuration

Configuration happens entirely through environment variables. The
following configuration options exist.

**`TARGET_HOSTNAME`**  
The hostname all requests should be redirected to, e.g. `www.my-domain.com`.

**`TARGET_PROTOCOL`**
The protocol to be used on the redirect URL, defaults to `https`.

**`HTTP_STATUS_CODE`**
The HTTP status code to use for the redirect – either `301` (permanent) or `302` (temporary, the default).

## License

[MIT](https://philippbosch.mit-license.org)
