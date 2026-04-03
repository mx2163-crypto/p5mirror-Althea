cd "/Users/mengyaoxiu/Desktop/p5mirror-Althea/downloads/../p5projects"
#
echo unzip 1 "Childish syringa copy-mGh_sW5OS"
rm -rf "./Childish syringa copy-mGh_sW5OS"
mkdir "./Childish syringa copy-mGh_sW5OS"
pushd "./Childish syringa copy-mGh_sW5OS" > /dev/null
unzip -q "../../downloads/zips/Childish syringa copy-mGh_sW5OS"
popd > /dev/null
#
echo unzip 2 "Typical blinker copy copy-43JjDpe1x"
rm -rf "./Typical blinker copy copy-43JjDpe1x"
mkdir "./Typical blinker copy copy-43JjDpe1x"
pushd "./Typical blinker copy copy-43JjDpe1x" > /dev/null
unzip -q "../../downloads/zips/Typical blinker copy copy-43JjDpe1x"
popd > /dev/null
#
echo unzip 3 "Project 1-jXMUqfKvN"
rm -rf "./Project 1-jXMUqfKvN"
mkdir "./Project 1-jXMUqfKvN"
pushd "./Project 1-jXMUqfKvN" > /dev/null
unzip -q "../../downloads/zips/Project 1-jXMUqfKvN"
popd > /dev/null
#
echo unzip 4 "Project 1-n2UBFlX1f"
rm -rf "./Project 1-n2UBFlX1f"
mkdir "./Project 1-n2UBFlX1f"
pushd "./Project 1-n2UBFlX1f" > /dev/null
unzip -q "../../downloads/zips/Project 1-n2UBFlX1f"
popd > /dev/null
#
echo unzip 5 "Rowan nape-NRoYUHnH-"
rm -rf "./Rowan nape-NRoYUHnH-"
mkdir "./Rowan nape-NRoYUHnH-"
pushd "./Rowan nape-NRoYUHnH-" > /dev/null
unzip -q "../../downloads/zips/Rowan nape-NRoYUHnH-"
popd > /dev/null
#
echo unzip 6 "Pong game Student Activity 1.5 copy-y36bQOjym"
rm -rf "./Pong game Student Activity 1.5 copy-y36bQOjym"
mkdir "./Pong game Student Activity 1.5 copy-y36bQOjym"
pushd "./Pong game Student Activity 1.5 copy-y36bQOjym" > /dev/null
unzip -q "../../downloads/zips/Pong game Student Activity 1.5 copy-y36bQOjym"
popd > /dev/null

cd ..
# remove redundant p5.js p5.sound.min.js ml5.min.js
rm -f p5projects/*/p5.* p5projects/*/ml5.min.js
# sync last_updatedAt.txt
cd downloads/json
if [ -e pending_updatedAt.txt ]; then
  rm -f last_updatedAt.txt
  mv pending_updatedAt.txt last_updatedAt.txt
fi