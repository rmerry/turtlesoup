default: scripts styles pages less

clean:
	rm -rf output node_modules

prepare: clean
	mkdir -p ./output/{scripts,style}
	npm install

all: pages scripts style less

pages:
	cp ./src/index.htm ./output/

scripts:
	cp ./node_modules/codemirror/lib/codemirror.js ./output/scripts/
	cp ./node_modules/codemirror/mode/turtle/turtle.js ./output/scripts/
	cp ./src/script/main.js ./output/scripts/
	cp ./src/script/ui.js ./output/scripts/

styles:
	cp ./node_modules/codemirror/lib/codemirror.css ./output/style/

less:
	./node_modules/less/bin/lessc ./src/less/main.less ./output/style/styles.css
