/**
 *
 * constructor function for Review type object
 *
 *  @author: string
 *  @date: new Date()
 *  @comment: string
 *  @rating: number
 *
 *  @return: new Review()
 * */
export function Review(author, date, comment, rating) {
    this.id = String(new Date * Math.random())
    this.author = author
    this.date = this.date = date instanceof Date ? date : new Date()
    this.comment = comment
    this.rating = rating
}