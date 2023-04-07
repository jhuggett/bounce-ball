compile:
	deno compile --unstable run.ts

run:
	./run

compile_and_run:
	deno compile --unstable run.ts && ./run