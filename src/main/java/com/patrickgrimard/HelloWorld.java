package com.patrickgrimard;

import java.util.HashMap;
import java.util.Map;

import static com.patrickgrimard.JsonTransformer.toJson;
import static spark.Spark.before;
import static spark.Spark.get;
import static spark.SparkBase.port;
import static spark.SparkBase.staticFileLocation;

/**
 * Created by Patrick on 2015-06-23.
 */
public class HelloWorld {

    private static final Map<String, Object> model = new HashMap<>();

    public static void main(String[] args) {
        model.put("key", "value");
        staticFileLocation("/public");
        port(8080);
        before((req, res) -> res.type("application/json"));
        get("/hello", "application/json", (req, res) -> toJson(model));
    }

}
