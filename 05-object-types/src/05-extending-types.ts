//扩展类型

interface BasicAddress {
    name?:string
    street:string
    city:string
    country:string
    postalCodes:string
}

interface AddressWithUnit extends BasicAddress{
    unit:string
}

let awu:AddressWithUnit = {
    unit:'3单元',
    street:'二楼',
    city:'江苏',
    postalCodes:'123456',
    country:'中国',
    name:' '
}

interface Colorful {
    color:string
}

interface Circle {
    radius:number
}

interface ColorCircle extends Colorful,Circle{

}

const cc:ColorCircle = {
    color:'red',
    radius:100
}