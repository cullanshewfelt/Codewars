function formatDuration (query) {
  let s = query % 60;
  let m = Math.floor((query / 60) % 60);
  let h = Math.floor(query / 60 / 60) % 24;
  let d = Math.floor(query / 60 / 60 / 24) % 365;
  let y = Math.floor(query / 60 / 60 / 24 / 365)

  if (h === 0 && m === 0 && s === 0){
    return 'now';
  } else if(query % 60 === 0 && query % 3600 === 0){
    return `${h} hour`;
  } else if (h === 0  && s === 0){
    return `${m} minute${m > 1 ? 's' : ''}`;
  } else if (m === 0 && h === 0){
    return `${s} second${s > 1 ? 's' : ''}`
  } else if (h === 0 && m !== 0){
    return `${m} minute${m > 1 ? 's' : ''} and ${s} seconds`
  } else if (d === 0 && h !== 0 && m !== 0){
    return `${h} hour${h > 1 ? 's' : ''}, ${m} minute${m > 1 ? 's' : ''} and ${s} seconds`;
  } else if (y === 0 && d !== 0 && h !== 0 && m !== 0 && s !== 0){
    return `${d} day${d > 1 ? 's' : ''}, ${h} hour${h > 1 ? 's' : ''}, ${m} minute${m > 1 ? 's' : ''} and ${s} seconds`;
  } else if (y !== 0 && d !== 0 && h !== 0 && m !== 0 && s !== 0){
    return `${y} year${y > 1 ? 's' : ''}, ${d} days, ${h} hour${h > 1 ? 's' : ''}, ${m} minute${m > 1 ? 's' : ''} and ${s} second${s > 1 ? 's' : ''}`;
  } else if (y !== 0 && d !== 0 && h !== 0 && m !== 0 && s === 0){
    return `${y} year${y > 1 ? 's' : ''}, ${d} days, ${h} hour${h > 1 ? 's' : ''} and ${m} minute${m > 1 ? 's' : ''}`;
  }
}
console.log(formatDuration(1))
console.log(formatDuration(62))
console.log(formatDuration(120))

console.log(formatDuration(3662))
console.log(formatDuration(3600))

let answer = formatDuration(3662);
