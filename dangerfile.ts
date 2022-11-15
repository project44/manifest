import { danger, fail } from 'danger';

function checkMissingChangeset(): void {
	const changeset = danger.git.fileMatch('.changeset/**');

	if (changeset.created || changeset.edited || changeset.modified || changeset.deleted) return;

	const packages = danger.git.fileMatch('packages/*/src/**');

	if (packages.created || packages.edited || packages.modified || packages.deleted) {
		fail('Missing changeset for one or more packages. Please run `yarn changeset` to add one.');
	}
}

async function run() {
	checkMissingChangeset();
}

run().catch((error) => {
	console.error(error);
	process.exit(1);
});
