import { SiteClient } from 'datocms-client';

export default async function request(request, response) {
    console.log('->', request.body)
    if (request.method === 'POST') {
        const TOKEN = '539ed82e1ea285912247dd1bb26fd0';
        const client = new SiteClient(TOKEN);
        console.log(request.body)
        const record = await client.items.create({
            itemType: "976120",
            ...request.body,
        })

        console.log('Record -> ', JSON.stringify(record))

        response.json({
            dados: 'Dadoos',
            record: record,
        })
        return;
    }

    response.status(404).json({message: 'Você nao pode acessar aqui nao parça'})
}