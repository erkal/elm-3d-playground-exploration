#!/bin/bash

echo "<html>" >build/index.html
echo "<head>" >>build/index.html
echo "<meta name='viewport' content='width=device-width, initial-scale=1' />" >>build/index.html
echo "<link href=\"https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400&display=swap\" rel=\"stylesheet\">" >>build/index.html
echo "<style>" >>build/index.html
echo "body { background-color: #2c3e50; color: #b2bec3; font-family: 'Public Sans', sans-serif; font-size: 20px; margin: auto; max-width: 1000px; display: flex; flex-direction: column; align-items: center; }" >>build/index.html
echo "h1 { color: #c8d6e5; }" >>build/index.html
echo "a { color: #c8d6e5; text-decoration: none; }" >>build/index.html
echo ".item { display: flex; flex-direction: column; margin: 40px 0px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); }" >>build/index.html
echo ".item img { max-width: 100%; height: auto; }" >>build/index.html
echo "</style>" >>build/index.html
echo "</head>" >>build/index.html
echo "<body>" >>build/index.html
echo "<h1>All Examples</h1>" >>build/index.html

for dir in examples/*/; do
    dir_name=$(basename "$dir")
    image_path="build/$dir_name/image.png"
    description_path="build/$dir_name/description.txt"

    if [ ! -f "$image_path" ]; then
        image_html="<div style='width: 100%; height: 200px; background-color: #DDA7F1;'></div>"
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
