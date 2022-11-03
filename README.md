### Website cost calculator

### Reference
 - [Website](https://www.websitecostcalculator.app/)
 
### Instructions
 - ask client for backend - Which backend framework should I use (your existing backend framework)? Should I use any frontend framework or vanilla JavaScript? How will you combine this with your existing project?
 - Make backend prototype for client

### Copy targeted website

- Wget - `wget -k -K -E -r -l 10 -p -N -F --restrict-file-names=windows -nH https://www.websitecostcalculator.app`
- `-k` - make links in downloaded HTML or CSS point to local files
- `-K` - before converting file X, back up as X.orig
- `-E` save HTML/CSS documents with proper extensions, ignore 'Content-Length' header field, insert STRING among the headers, choose compression, one of auto, gzip and none. (default: none), maximum redirections allowed per page, set USER as proxy username, set PASS as proxy password, include 'Referer: URL' header in HTTP request, save the HTTP headers to fil
- `-l` - maximum recursion depth (inf or 0 for infinite)
- `-p` - save files to PREFIX/.. , ignore NUMBER remote directory components
- `-N` - don't re-retrieve files unless newer than local
- `-F` - treat input file as HTML

- **Basic commands**
  ```
  // check wget is installed or not
  which wget
  // Download wordpress
  wget https://wordpress.org/latest.zip
  Change name of download file
  wget -O newname.zip https://wordpress.org/latest.zip
  Redirect download file to somewere else
  mkdir subdir && wget -P subdir newname.zip https://wordpress.org/latest.zip
  Download large file
  wget -c newname.zip https://wordpress.org/latest.zip
  ```
- Fetching multiple files
  ```
  touch fetch-file-list.txt
  nano fetch-file-list.txt
  cat fetch-file-list.txt
  wget -i fetch-file-list.txt
  ```
- fetch-file.list.txt
  ```
  https://c.pxhere.com/photos/53/46/flowers_tulips_bouquet_cut_flowers_colorful_color_plant_violet-940768.jpg!s1
  https://wordpress.org/latest.zip
  ```
- **Downloading entire website**

  ```
  // Download entire website
  wget --mirror https://www.websitecostcalculator.app/
  // make all links to local pages
  wget --mirror --page-requisites --convert-link --no-clobber --no-parent --domains websitecostcalculator.app https://www.websitecostcalculator.app
  ```
