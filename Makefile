clean:
	rm -rf output node_modules

prepare: clean
	mkdir -p output
	npm install
