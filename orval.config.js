module.exports = {
  main: {
    input: {
      target: `${process.env.NEXT_PUBLIC_API_HOST ?? "https://pay-out.us"}/v3/api-docs`
    },
    output: {
      mode: "split",
      target: 'src/api/generated/endpoint.ts',
      useNativeEnums: true,
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write',
    },
  },
};
