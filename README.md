### Website cost calculator

### Reference
 - [Website](https://www.websitecostcalculator.app/)
 
### Instructions
 - Make user ID from frontend, save it to localstorage, search/fetch all costitem by userip or userid -. on server instead of userip we are going to take userid as path parameter
 - Make a loader ✅
 - Make stickey menu (dashboard, save, reset, etc button) ✅
 - Save all items in localstorage ✅
 - Make backend prototype for client ✅
 - Cost calculation - intractivity 
 - Show input levels in table instead of only data
 - Change content
 - style save button and make the button sticky and intractive 
 - Fetch data cost item by id and set default value for all inputs
 - Make it responsive
 - Slider input should look better (filler)
 - ask client for backend - Which backend framework should I use (your existing backend framework)? Should I use any frontend framework or vanilla JavaScript? How will you combine this with your existing project?

### FastAPI
 - [Reference](https://www.mongodb.com/developer/languages/python/python-quickstart-fastapi/)
 - [Handler objectId](https://api.mongodb.com/python/3.2/api/bson/json_util.html), [JSON object must be str, bytes or bytearray, not dict](https://stackoverflow.com/questions/42354001/json-object-must-be-str-bytes-or-bytearray-not-dict), [Value error on running find_one query](https://www.mongodb.com/community/forums/t/value-error-on-running-find-one-query/8482)
 - [Get client's real IP address](https://stackoverflow.com/questions/60098005/fastapi-starlette-get-client-real-ip)

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
