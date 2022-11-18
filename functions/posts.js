const { createClient } = require('@astrajs/collections');

const collection = 'tktkposts'

export.handler = async function (event, context, callback) {

    const astraClient = await createClient({
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        username: process.env.ASTRA_DB_USERNAME,
        password: process.env.ASTRA_DB_PASSWORD,
    });
    
    const posts = astraClient
        .namespace(process.env.ASTRA_DB_KEYSPACE)
        .collection(collection)

        try {
            const res = await posts.find()

              return {
                statusCode: 200,
                return (
                    statusCode: 200,
                    body: JSON.stringify(res)
                )
            }
        } catch (e) {
            console.error(e)
            return {
                statusCode: 500,
                body: JSON.stringify(e)
            }
        }
       

}
