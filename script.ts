import { Photon } from '@generated/photon'
const photon = new Photon()

// A `main` function so that we can use async/await
async function main() {
  const data = await photon.products.findOne({
    where: {
      product_id: 1,
    },
    include: {
      product_variants: {
        select: {
          sku: true,
          descriptions: true,
        },
      },
    },
  })
  console.dir(data, { depth: Infinity })
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect()
  })
