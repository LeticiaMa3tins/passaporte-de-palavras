const DAY=86400000;
function nextReview(previous, grade, now=Date.now()) {
 const p=previous||{interval:0,reps:0};
 const interval=grade==='again'?10/1440:grade==='hard'?Math.max(1,p.interval*1.2):grade==='good'?Math.max(p.reps?3:1,p.interval*2.5):Math.max(4,p.interval*3.5);
 return {interval,reps:(p.reps||0)+1,due:now+interval*DAY,last:now,grade};
}
function makeQueue(languages, selected, reviews, kind='all', onlyDue=false, now=Date.now()) {
 const chosen=languages.filter(l=>selected.includes(l.id));
 const cards=chosen.flatMap(l=>l.cards.map((c,i)=>({...c,lang:l.id,order:i}))).filter(c=>kind==='all'||c.type===kind);
 const due=cards.filter(c=>reviews[c.id]&&reviews[c.id].due<=now).sort((a,b)=>reviews[a.id].due-reviews[b.id].due);
 const fresh=cards.filter(c=>!reviews[c.id]).sort((a,b)=>a.order-b.order);
 return [...due,...(onlyDue?[]:fresh)].slice(0,10);
}
if(typeof module!=='undefined')module.exports={nextReview,makeQueue};
