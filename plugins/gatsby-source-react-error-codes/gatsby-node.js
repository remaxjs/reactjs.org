exports.sourceNodes = async ({actions}) => {
  const {createNode} = actions;

  try {
    const jsonString = JSON.stringify(require('./codes.json'));

    createNode({
      id: 'error-codes',
      children: [],
      parent: 'ERRORS',
      internal: {
        type: 'ErrorCodesJson',
        contentDigest: jsonString,
      },
    });
  } catch (error) {
    console.error(
      `The gatsby-source-react-error-codes plugin has failed:\n${
        error.message
      }`,
    );

    process.exit(1);
  }
};
