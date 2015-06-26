package com.patrickgrimard;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Created by Patrick on 2015-06-23.
 */
public class JsonTransformer {
    private static final ObjectMapper mapper = new ObjectMapper();

    public static String toJson(Object model) throws JsonProcessingException {
        return mapper.writeValueAsString(model);
    }
}
