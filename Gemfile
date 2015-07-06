source "https://rubygems.org"

# Guard (automates development tasks)
group :development do
  gem 'guard'
  gem 'guard-jekyll'
  gem 'guard-jekyll-plus'
  gem 'guard-livereload'
  gem 'guard-scss-lint'
end

# Jekyll (generates static files)
gem 'jekyll', '~> 3.0.0.pre.beta'
group :jekyll_plugins do
  gem 'jekyll-archives', github: 'jekyll/jekyll-archives'
  gem 'jekyll-assets'
  gem 'jekyll-paginate'
  gem 'jekyll-sitemap'
  gem 'jekyll-smartify'

  gem 'autoprefixer-rails'
  gem 'exiftool'
  gem 'oembed'
  gem 'susy'
  gem 'therubyracer' # Autoprefixer requires a JS runtime
  gem 'typogruby'
  gem 'uglifier'
end

# Rake (manages build tasks)
gem 'rake'
