install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

fix:
	npx eslint --fix .

test:
	npm test

test-coverage:
	npm run coverage
