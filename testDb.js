const db = require('./models')
db.connect()

const bountieCRUD = async () => {
    try{
    //     //CREATE
    //     const newDrink = await new db.Drink({
    //         name: 'Coco Milk',
    //         rating: 9
    //     })

    //     await newDrink.save()

    //     console.log(newDrink)

        //READ
        const foundBountie = await db.Bountie.findOne({
            name: 'Han Solo'
        })

        console.log('found Bountie', foundBountie)

        //UPDATE
        // foundDrink.name = 'Ice coco'

        // await foundDrink.save()

        // console.log('updated drink', foundDrink)

        //DESTROY
        // const deletedDrink = await db.Drink.deleteOne({
        //     name: 'Ice coco'
        // })

        // console.log(deletedDrink)

    } catch (err) {
        console.log(err)
    }
}

bountieCRUD()