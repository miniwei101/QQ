/* const handleLogin = (response) => {
    if (response.result === 0) {
        console.log('login osucceed');
    } else {
        console.log('login failed');
    }
};

login('username', 'password', handleLogin); */



/* login('username', 'password', (response)=>{
    if (response.result === 0) {
        console.log('login osucceed');
    } else {
        console.log('login failed');
    }
}); */


/* login('username', 'password', (response)=>{
    if (response.result === 0) {
        empLeaveTotal(response.id,(hour)=>{
            if(hour.total>0){
                console.log('您這個月總共請假36個小時');
                getLeaveDetail((official)=>{
                    if(official!==0)
                        console.log('公假不扣錢');
                })
            }else{
                console.log('您這個月全勤!');
            }
        });
    } else {
        console.log('login failed');
    }
});
 */

login('username', 'password')
        .then((response)=>{
            if (response.result === 0)
                return empLeaveTotal(response.id);
            return console.log('login failed');
        }).then((hour)=>{
            if(hour.total>0)
                return getLeaveDetail(official);
            return console.log('您這個月全勤!');
        }).then((officialHour)=>{
             if(official!==0)
                console.log('公假不扣錢');             
            else
                console.log('您這個月全勤!');
        });

