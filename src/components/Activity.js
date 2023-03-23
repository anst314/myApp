
function Activity(props) {
    const { activity } = props;
    console.log(props)



    return (
        <div>
            <p className="Activities">{activity.activity}</p>
            <p className="Activities">{activity.type}</p>
            <p className="Activities">{activity.participants}</p>
            <p className="Activities">{activity.price}</p>
            <p className="Activities">{activity.link}</p>
            <p className="Activities">{activity.key}</p>
            <p className="Activities">{activity.accessibility}</p>
        </div>
    )
}
export default Activity;