FROM ubuntu:16.04

RUN echo 'apt-get update && apt-get install --no-install-recommends -y $*' > /usr/local/bin/pkg-deb
RUN echo 'gem install --no-ri --no-rdoc $*' > /usr/local/bin/pkg-gem
RUN chmod +x /usr/local/bin/pkg-*

RUN pkg-deb linkchecker

RUN pkg-deb \
  build-essential=12.1ubuntu2 \
  ruby2.3 \
  ruby2.3-dev

RUN pkg-gem bundler:1.14.6
RUN bundle config --global silence_root_warning 1

RUN pkg-gem ffi:1.9.18

RUN pkg-deb \
  patch \
  ruby-dev \
  zlib1g-dev \
  liblzma-dev

WORKDIR /src
COPY Gemfile /src/Gemfile
COPY Gemfile.lock /src/Gemfile.lock

RUN bundle install

# Force choosing a command in docker-compose.yml or CLI
CMD false
