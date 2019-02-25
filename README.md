[![Build Status](https://travis-ci.org/telemark/micro-saml-mock.svg?branch=master)](https://travis-ci.org/telemark/micro-saml-mock)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# micro-saml-mock

Mocks the auth service

## config docker.env

```bash
NODE_ENV=production
SAML_YAR_SECRET=Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go
SAML_ENCRYPTOR_SECRET=Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go
SAML_JWT_SECRET=Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go

```

## API

### GET ```/login?origin=<url for redirect>```

- successful login redirects to ```origin?jwt=<jwt>```

### GET ```/logout```

- redirects user to ```<logoutUrl>```

## License

[MIT](LICENSE)
