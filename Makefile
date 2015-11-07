default: scripts styles pages less

clean:
	rm -rf output node_modules

prepare: clean
	mkdir -p ./output/scripts
	mkdir -p ./output/style
	npm install

all: pages scripts style less

pages:
	cp ./ui/index.htm ./output/

scripts:
	cp ./node_modules/codemirror/lib/codemirror.js ./output/scripts/
	cp ./node_modules/codemirror/mode/turtle/turtle.js ./output/scripts/
	cp -r ./lib/* ./output/scripts/

styles:
	cp ./node_modules/codemirror/lib/codemirror.css ./output/style/

less:
	./node_modules/less/bin/lessc ./ui/less/main.less ./output/style/styles.css
