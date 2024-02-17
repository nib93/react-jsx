function App(){
    return(
        <div>
            <Tweet
            name="Neeti Bhatt"
            username="netib"
            date={new Date().toDateString()}
            message="I love react!!"
            />
            <Tweet
            name="Jaimin Joshi"
            username="jdjoshi"
            date={new Date().toDateString()}
            message="I don't like computer science."
            />
            <Tweet
            name="Ishan Bhatt"
            username="ishaneeti"
            date={new Date().toDateString()}
            message="I love Technology. I love travelling. I love to bake."
            />
        </div>

    );
}