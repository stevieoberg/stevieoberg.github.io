# filename: Rakefile
task :default do
    puts "Building Jekyll site..."

    # Runs the jekyll build command for production
    # TravisCI will now have a site directory with our
    # statically generated files.
    sh("JEKYLL_ENV=production bundle exec jekyll build")
    puts "Jekyll successfully built"
end


require 'html-proofer'

task :test do
    sh "bundle exec jekyll build"
    options = { :assume_extension => true }
    HTMLProofer.check_directory("./_site", options).run
end
