echo "-------------------------------------------------"
echo "------- Automatic SVG Sprite Generator ----------"
echo "-------------------------------------------------"
echo ""
echo "WARNING: Make sure you're running the script from
sprite-generator directory, otherwise it won't work."
echo ""
echo "If you have some svgs you'd like to include in the
end sprite, you should add the folder(s) containing svgs
in TODONEW/ folder."
echo ""
echo "And then, in move.js file, you include the path to
that folder in svgCollections constant."
echo ""
read -p "Press Enter to start sprite generation" < /dev/tty
node src/move.js
npx svgo -rf ../icons/new/ ../icons/new_optimized/
mkdir ../icons/all
cp ../icons/filled/* ../icons/all
cp ../icons/outline/* ../icons/all
cp ../icons/new_optimized/* ../icons/all
node src/build.js
rm -rf ../icons/new
rm -rf ../icons/new_optimized
rm -rf ../icons/all
echo "Sprite was generated successfully!"
