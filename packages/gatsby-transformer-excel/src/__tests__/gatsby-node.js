const Promise = require(`bluebird`)
const _ = require(`lodash`)
const XLSX = require(`xlsx`)

const { onCreateNode } = require(`../gatsby-node`)

describe(`Process  nodes correctly`, () => {
  const node = {
    id: `whatever`,
    parent: `SOURCE`,
    children: [],
    extension: `csv`,
    internal: {
      contentDigest: `whatever`,
      mediaType: `text/csv`,
    },
    name: `test`,
  }

  // Make some fake functions its expecting.
  const loadNodeContent = node => Promise.resolve(node.content)

  it(`correctly creates nodes from JSON which is an array of objects`, async () => {
    const data = [[`blue`, `funny`], [true, `yup`], [false, `nope`]]
    const csv = XLSX.utils.sheet_to_csv(
      XLSX.utils.aoa_to_sheet(data, { raw: true })
    )
    node.content = csv

    const createNode = jest.fn()
    const createParentChildLink = jest.fn()
    const boundActionCreators = { createNode, createParentChildLink }

    await onCreateNode({
      node,
      loadNodeContent,
      boundActionCreators,
    }).then(() => {
      expect(createNode.mock.calls).toMatchSnapshot()
      expect(createParentChildLink.mock.calls).toMatchSnapshot()
      expect(createNode).toHaveBeenCalledTimes(2 + 1)
      expect(createParentChildLink).toHaveBeenCalledTimes(2 + 1)
    })
  })

  it(`If the object has an id, it uses that as the id instead of the auto-generated one`, async () => {
    const data = [
      [`id`, `blue`, `funny`],
      [`foo`, true, `yup`],
      [void 0, false, `nope`],
    ]
    const csv = XLSX.utils.sheet_to_csv(
      XLSX.utils.aoa_to_sheet(data, { raw: true })
    )
    node.content = csv

    const createNode = jest.fn()
    const createParentChildLink = jest.fn()
    const boundActionCreators = { createNode, createParentChildLink }

    await onCreateNode({
      node,
      loadNodeContent,
      boundActionCreators,
    }).then(() => {
      expect(createNode.mock.calls[0][0].id).toEqual(`foo`)
    })
  })

  it(`the different objects shouldn't get the same ID even if they have the same content`, async () => {
    const data = [
      [`id`, `blue`, `funny`, `green`],
      [`foo`, true, `yup`],
      [void 0, false, `nope`],
      [void 0, false, `nope`],
      [void 0, void 0, `nope`, false],
    ]
    const csv = XLSX.utils.sheet_to_csv(
      XLSX.utils.aoa_to_sheet(data, { raw: true })
    )
    node.content = csv

    const createNode = jest.fn()
    const createParentChildLink = jest.fn()
    const boundActionCreators = { createNode, createParentChildLink }

    await onCreateNode({
      node,
      loadNodeContent,
      boundActionCreators,
    }).then(() => {
      const ids = createNode.mock.calls.map(object => object[0].id)
      // Test that they're unique
      expect(_.uniq(ids).length).toEqual(4 + 1)
    })
  })
})
