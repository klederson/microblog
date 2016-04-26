# microblog
A simple markdown php command line blog system for enthusiastic and nerd people ( usually developers )


# Installation

```bash
# copy .env file
cp .env.dist .env

# install aditional packages
composer install
```

If you want to enable debug seetings, update `.env` file as follows:

```bash
SYMFONY_ENV = dev
SYMFONY_DEBUG = 1
```

Alternatively you may use our [Symfony Vagrant VM](https://github.com/kisphp/symfony-vagrant) to run the blog in develop mode.
