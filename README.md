# microblog
A simple markdown php command line blog system for enthusiastic and nerd people ( usually developers )

[![Build Status](https://travis-ci.org/klederson/microblog.svg?branch=master)](https://travis-ci.org/klederson/microblog)
[![codecov.io](https://codecov.io/github/klederson/microblog/coverage.svg?branch=master)](https://codecov.io/github/klederson/microblog?branch=master)

<!--
[![Latest Stable Version](https://poser.pugx.org/klederson/microblog/v/stable)](https://packagist.org/packages/klederson/microblog)
[![Total Downloads](https://poser.pugx.org/klederson/microblog/downloads)](https://packagist.org/packages/klederson/microblog)
[![License](https://poser.pugx.org/klederson/microblog/license)](https://packagist.org/packages/klederson/microblog)
[![Monthly Downloads](https://poser.pugx.org/klederson/microblog/d/monthly)](https://packagist.org/packages/klederson/microblog)
-->

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
