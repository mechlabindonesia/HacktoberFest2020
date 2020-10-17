import java.math.BigInteger
import java.util.*

fun extraLongFactorials(a:Int){
    var mul =BigInteger("1")
    for(i in 1..a){
        mul *= i.toBigInteger()
    }
    print(mul)
}

fun main(args:Array<String>){
    val sc =Scanner(System.`in`)
    var a = sc.nextInt()
    extraLongFactorials(a)
}