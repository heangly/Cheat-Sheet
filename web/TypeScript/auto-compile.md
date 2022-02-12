"name_for_your_script" : "tsc [ts file name] --outFile [js file name] -w"

auto compile the whole folder:
	"tsc --init" -> will generate "tscofig.json"
then, run:
	"tsc -w" will watch and compile all ts files in the project

dont want to compile some ts file?
	
  "exclude" : [
    "node_modules" //  -> node_modules will be excluded by default. it also can be any name of the file
  ]

```typescript
tsc --init
write this in the tsconfig.json
"outDir" : "./dist"
"rootDir : "./src
```

```you don't want TypeScript to compile to JavaScript in the face of errors, you can use the "noEmitOnError" option
```


