function superbowlWin(array){
    let record = array.find( array => array.result == 'W')
    return record ? record.year : undefined
}