#!/bin/bash

echo "<html>" >build/index.html
echo "<head>" >>build/index.html
echo "<meta name='viewport' content='width=device-width, initial-scale=1' />" >>build/index.html
echo "<link href=\"https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400&display=swap\" rel=\"stylesheet\">" >>build/index.html
echo "<style>" >>build/index.html
echo "body { background-color: #222222; color: #f3f3f3; font-family: 'Public Sans', sans-serif; font-size: 18px; margin: auto; padding: 20px; max-width: 1000px; display: flex; flex-direction: column; align-items: center; }" >>build/index.html
echo "h1 { color: #FFFFFF; }" >>build/index.html
echo "a { color: #c8d6e5; text-decoration: underline; padding: 10px; transition: color 0.3s; }" >>build/index.html
echo "a:hover { color: #FFFFFF; font-weight: bold; }" >>build/index.html
echo ".item { padding: 20px; display: flex; flex-direction: column; margin: 40px 0px; background-color: #333333; box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3); transition: box-shadow 0.3s; }" >>build/index.html
echo ".item:hover { box-shadow: 0 8px 16px 0 rgba(0,0,0,0.5); }" >>build/index.html
echo ".item img { width: 100%; height: auto; }" >>build/index.html
echo "</style>" >>build/index.html
echo "</head>" >>build/index.html
echo "<body>" >>build/index.html
echo "<h1>All Examples in</h1>" >>build/index.html
echo "<h2><a href='https://github.com/erkal/elm-3d-playground-exploration'>github.com/erkal/elm-3d-playground-exploration</a></h2>" >>build/index.html

for dir in examples/*/; do
    dir_name=$(basename "$dir")
    image_path="build/$dir_name/image.png"
    description_path="build/$dir_name/description.txt"

    if [ ! -f "$image_path" ]; then
        image_html="<a href='./$dir_name/index.html'><div style='width: 100%; height: 200px; background-color: #444444;'></div></a>"
    else
        image_html="<a href='./$dir_name/index.html'><img src='./$dir_name/image.png' alt=\"$dir_name image\" /></a>"
    fi

    if [ ! -f "$description_path" ]; then
        description="Placeholder description for $dir_name"
    else
        description=$(cat "$description_path")
    fi

    echo "<div class='item'>" >>build/index.html
    echo "$image_html" >>build/index.html
    echo "<a href='https://github.com/erkal/elm-3d-playground-exploration/tree/restructure-for-elm-watch/examples/$dir_name'>Source code</a>" >>build/index.html
    echo "<p>$description</p>" >>build/index.html
    echo "</div>" >>build/index.html
done

echo "</body>" >>build/index.html
echo "</html>" >>build/index.html
