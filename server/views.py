from flask import Blueprint, jsonify
import pandas as pd

views = Blueprint('views', __name__)

@views.route('/api/data', methods=['GET'])
def get_csv_data():
    data = pd.read_csv('server/data/hirc_pm_report_cleaned.csv')
    if len(data) == 0:
        return jsonify([])
    data = data.where(pd.notnull(data), None)
    return jsonify(data.to_dict(orient='records'))

    