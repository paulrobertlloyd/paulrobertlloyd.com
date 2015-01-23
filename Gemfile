source "https://rubygems.org"

# Capistrano (automates deployment)
group :development do
  gem 'capistrano'
  gem 'capistrano-rvm'
  gem 'capistrano-bundler'
end

# Guard (automates development tasks)
group :development do
  gem 'guard'
  gem 'guard-jekyll-plus', github: 'berrberr/guard-jekyll-plus'
  gem 'guard-jshintrb'
  gem 'guard-livereload'
  gem 'guard-sass'
  gem 'guard-scss-lint'
end

# Jekyll (generates static files)
gem 'jekyll'
group :jekyll_plugins do
  gem 'jekyll-archives'
  gem 'jekyll-assets'
  gem 'jekyll-sitemap'

  gem 'octopress-autoprefixer'
  gem 'octopress-minify-html'

  gem 'rouge' # Remove with Jekyll 3.0
  gem 'exiftool'
  gem 'susy'
  gem 'therubyracer'
  gem 'typogruby'
  gem 'uglifier'
end

# Rake (manages build tasks)
gem 'rake'

# Image plugin
gem 'mini_magick'
