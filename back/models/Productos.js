const mongoose=require("mongoose")

const productosSchema=mongoose.Schema({
    nombre:{
        type:String,
        required:[true,"por favor el npmbre del producto"],
        trim:true,
        maxLength:[120,"Elnombre el productono de exceder los 120 caracteres"]

    },
    precio:{
        type:Number,
        required:[true,"por favor registre el precio del producto."],
        maxLenght:[8,"El precio del producto no puede estart por encima de 99.999.999"],
        defaul:0.0
    },
    descripcion:{
        type:String,
        required:[true,"por favor registre una descripcion del producto"]
    },
    calificacion:{
        type:Number,
        default: 0
    },
    imagen:[
        {
            public_id:{
                type:String,
                required:true,
            },
            url:{
                type:String,
                required:true
            },
        }
    ],
    categoria:{
        type:String,
        required:[true,"por favor seleccione la categoria del producto"],
        enum:{
            values:[
                "Alimento seco",
                "Alimeto humedo",
                "Accesorios",
                "Cuidado e higiene",
                "Medicamentos",
                "Snacks",
                "Juguetes"
            ]
        }
    },
    vendedor:{
        type:String,
        required:[true,"por favor registre el vendedor del producto"]
    },
    inventario:{
        type:Number,
        required:[true,"por favor registre el stock del producto"],
        maxLenght:[5,"Cantidad maxima del producto no pudede sobrepasar 99999"],
        default:0
    },
    numCalificaciones:{
        type:Number,
        default:0
    },
    opiniones:[
        {
            nombreCliente:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                require:true
            },
            comentario:{
                type:String,
                required:true
            }
        }
    ],

    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    },
    fechaCreacion:{
        type:Date,
        default:Date.now
    }
 

})

module.exports=mongoose.model("productos",productosSchema)