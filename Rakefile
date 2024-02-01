# filename: Rakefile

require 'html-proofer'

task :default do
  puts "Building Jekyll site..."

  # Runs the jekyll build command for production
  # TravisCI will now have a site directory with our
  # statically generated files.
  sh("JEKYLL_ENV=production bundle exec jekyll build")
  puts "Jekyll successfully built"
  options = {
        :assume_extension => true,
        :cache => { :timeframe => '2w' },
        :http_status_ignore => [999],
        :check_favicon => true
    }
  HTMLProofer.check_directory("./_site", options).run
end
