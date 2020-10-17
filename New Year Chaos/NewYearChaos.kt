import java.io.*
import java.math.*
import java.security.*
import java.text.*
import java.util.*
import java.util.concurrent.*
import java.util.function.*
import java.util.regex.*
import java.util.stream.*
import kotlin.collections.*
import kotlin.comparisons.*
import kotlin.io.*
import kotlin.jvm.*
import kotlin.jvm.functions.*
import kotlin.jvm.internal.*
import kotlin.ranges.*
import kotlin.sequences.*
import kotlin.text.*


fun minimumBribes(n: Int, q: Array<Int>): Unit {
    var chaos = false
    var counter = 0

    for (i in n-1 downTo 0) {
        if (q[i]-(i+1)>2) {
            chaos = true
        }
        var k =q[i]-2
        if(0>k){
            k=0
        }
        for(j in k until i){
            if(q[j]>q[i]){
                counter+=1
            }
        }
    }
    if (chaos) {
        println("Too chaotic")
    } else {
        println(counter)
    }
}

fun main(args: Array<String>) {
    val scan = Scanner(System.`in`)

    val t = scan.nextLine().trim().toInt()

    for (tItr in 1..t) {
        val n = scan.nextLine().trim().toInt()

        val q = scan.nextLine().split(" ").map{ it.trim().toInt() }.toTypedArray()

        minimumBribes(n,q)
    }
}
